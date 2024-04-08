CREATE TABLE IF NOT EXISTS customer (
	id VARCHAR(7) PRIMARY KEY,  -- random chars like ({char * 3}-{char * 3}). Ex: Av3-nD7
	name VARCHAR(20) NOT NULL,
	surname VARCHAR(20) NOT NULL,
	email VARCHAR(25) NOT NULL,
	password VARCHAR(64) NOT NULL,
	user_type VARCHAR(7) CONSTRAINT user_type_restriction CHECK(user_type IN ('student', 'teacher'))
);

CREATE TABLE IF NOT EXISTS task (
	content TEXT NOT NULL,
	student_id VARCHAR(7) REFERENCES customer (id) ON DELETE CASCADE,
	teacher_id VARCHAR(7) REFERENCES customer (id) ON DELETE CASCADE,
	creating_datetime TIMESTAMP DEFAULT NOW(),
	deadline_datetime TIMESTAMP NOT NULL,
	status BOOL DEFAULT false,  -- false = in work | true = accepted
	mark SMALLINT CONSTRAINT mark_restriction CHECK(mark BETWEEN 2 AND 5)
);

INSERT INTO customer VALUES
	(
		'Dl9-8Fn',
		'StudentName',
		'StudentSurname',
		'student@mail.ru',
		'5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5',
		'student'
	),
	(
		'fng-8fM',
		'TeacherName',
		'TeacherSurname',
		'teacher@mail.ru',
		'5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5',
		'teacher'
	);

INSERT INTO task VALUES
	(
		'Study Docker',
		'Dl9-8Fn',
		'fng-8fM',
		NOW(),
		'13.04.2024 14:00:00',
		false,
		NULL
	),
	(
		'Study Git',
		'Dl9-8Fn',
		'fng-8fM',
		NOW(),
		'13.04.2024 14:30:00',
		true,
		4
	);
