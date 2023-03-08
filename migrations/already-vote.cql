CREATE TABLE curia.already_vote_theme (
  id UUID,
  user_id INT,
  theme_id INT,
  user_name VARCHAR,
  PRIMARY KEY ((id), user_id, theme_id)
)
WITH CLUSTERING ORDER BY (user_id DESC, theme_id ASC);