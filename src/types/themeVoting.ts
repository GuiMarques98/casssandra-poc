export enum VoteType {
  AGREE,
  DISAGREE,
  ABSTINENCE
}

export interface ThemeVoting {
  id: String,
  themeId: Number,
  proposalId?: Number,
  vote: VoteType
}
