CREATE TABLE curia.theme_voting (
  id UUID,
  theme_id INT,
  proposal_id INT,
  vote VARCHAR,
  PRIMARY KEY ((id), theme_id, vote)
)
WITH CLUSTERING ORDER BY (theme_id DESC, vote ASC);
