import cassandraClient from "../config/cassandra";
import { VoteType } from "../types/themeVoting";
import { v4 as uuid } from "uuid";

export interface VotesParam {
  themeId: Number;
  vote: VoteType;
}
export interface VoteParam {
  voteId: Number;
}

export interface CreateVote {
  themeId: Number,
  proposalId?: Number,
  vote: VoteType
}

export class ThemeRepository {
  private client = cassandraClient;
  private tableName = 'curia.theme_voting';

  async getVotes(params: VotesParam) {
    let query = `SELECT * FROM ${this.tableName} WHERE theme_id = ? AND vote = ?;`;
    let queryParam = [params.themeId, params.vote];
    const result = await this.client.execute(query, queryParam, { prepare: true });
    if (result.rows.length < 0) {
      return 'not found'
    }
    return result.rows
  }

  async getAllVotes() {
    let query = `SELECT * FROM ${this.tableName};`;
    const result = await this.client.execute(query, [], { prepare: true });
    if (result.rows.length < 0) {
      return 'not found'
    }
    return result.rows
  }

  async createVoting(vote: CreateVote) {
    const query = `INSERT INTO ${this.tableName} (id, theme_id, proposal_id, vote) values (?, ?, ?, ?);`;
    const queryParam = [
      uuid(),
      vote.themeId,
      vote.proposalId,
      vote.vote.toString()
    ]
    return await this.client.execute(query, queryParam, { prepare: true });
  }
}

export default new ThemeRepository()