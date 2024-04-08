CREATE TABLE customer (
	id VARCHAR(7) PRIMARY KEY,  -- random chars like ({char * 3}-{char * 3}). Ex: Av3-nD7
	name VARCHAR(20) NOT NULL,
	surname VARCHAR(20) NOT NULL,
	phone VARCHAR(11) NOT NULL,  -- +7 (929) 589 72-62 -> 79295897262,
	password VARCHAR(64) NOT NULL,
	user_type VARCHAR(7) CONSTRAINT user_type_restriction CHECK(user_type IN ('student', 'teacher'))
);

CREATE TABLE task (
	content TEXT NOT NULL,
	student_id VARCHAR(7) REFERENCES customer (id),
	teacher_id VARCHAR(7) REFERENCES customer (id),
	status BOOL,  -- 0 = in work | 1 = accepted
	mark SMALLINT CONSTRAINT mark_restriction CHECK(mark BETWEEN 2 AND 5)
);
