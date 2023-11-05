## Newbie Debugger

A cub reporter interviewed four people. He was very careless, however. Each statement he wrote was half right and half wrong. He went back and interviewed the people again. And again, each statement he wrote was half right and half wrong. From the information below, can you straighten out the mess?

The first names were Jane, Larry, Opal, and Perry. The last names were Irving, King, Mendle, and Nathan. The ages were 32, 38, 45, and 55. The occupations were drafter, pilot, police sergeant, and test car driver.

Hints:

1. Each interviewee was interviewed only once in each interview - i.e. Jane cannot have the last name of Mendle because both Jane and Mendle were interviewed during the second round of interviews.

2. Each person has only one job - i.e. Nathan cannot be both a drafter and a drive test cars.

On the first interview, he wrote these statements, one from each person:

1.	    	Jane: "My name is Irving, and I'm 45."
2.	    	King: "I'm Perry and I drive test cars."
3.	    	Larry: "I'm a police sergeant and I'm 45."
4.	    	Nathan: "I'm a drafter, and I'm 38."

On the second interview, he wrote these statements, one from each person:

5.	    	Mendle: "I'm a pilot, and my name is Larry."
6.	    	Jane: "I'm a pilot, and I'm 45."
7.	    	Opal: "I'm 55 and I drive test cars."
8.	    	Nathan: "I'm 38 and I drive test cars."

**Problem Solving**

- Identify matching answers from same participants.

1. Jane answered that she is "45" years old in both interviews. Therefore one can deduce that her age is 45.

```Answer: Jane's age is 45```

2. Nathan answered that he is "38" years old in both interviews.
Therefore one can deduce that his age is 38.

```Answer: Nathan's age is 38```

- Identify false statements

1. Jane's name cannot be "Irving" and her job is not "a pilot" since we have determine that only the half of her statement about her age being "45" was true.

2. Nathan's job cannot be "a drafter" nor does he "drive a test car" since we have determine that only the half of his statement about his age being "38" was true.

3. King's statement in the first interview; "I'm Perry" is false since neither name appears in the second interview.

- Identify the right statements by process of elimination.

1. Jane is not "a pilot" so that leaves Mendle as "a pilot".

```Answer: Mendle is a pilot```

2. King from the first interview and Opal from the second interview are the only ones left with the jod "drive a test car" as a true statement, which we can deduce is the same person.

```Answer: Opal King is a test car driver```

3. Larry's age is not "45" since we know Jane is 45, so his true statement is "I'm a police sergeant".

```Answer: Larry is a police sergeant```

3. Nathan cannot have a job of "a test car driver" since Opal King already has it. Can't be a pilot since Mendle has that job, can't be a police sergeant since Larry already has it, so the last job left is what he stated in his first interview; "a drafter".

```Answer: Nathan is a drafter```

4. Jane's last name is not Mendle since her name is in both rounds of interviews and Mendle is present in the second round.

The last name Nathan is present is both on the interviews so it could not be her last name.

The last name King is already taken by Opal.

The only last name left for Jane is the Irving in her original statement.

```Answer: Jane's last name is Irving```

5. Mendle is the only last name left to match and since Larry is the only available first name available they are paired.

```Answer: Larry's last name is Mendle```

6. Jane gets paired with the last job available.

```Answer: Jane is a pilot```

7. Opal King gets paired with his original age.

```Answer: Opal King is age 55```

8. Ane the only age left is "32", that goes to Larry Mendle.

```Answer: Larry Mendle is age 32```

- Worksheet:

<img width="799" alt="Screenshot 2023-11-04 at 11 29 44 PM" src="https://github.com/rixiobarrios/icstars-newby-debugger/assets/55994508/12c3e3b6-a545-4bf6-b67c-1b342e1bcf23">

- Answers:

1. Jane Irving, pilot, 45
2. Larry Mendle, police sergeant, 32
3. Perry Nathan, drafter, 38
4. Opal King, test car driver, 55

**Note: An attempt to code this problem is in the file script.js**# icstars-newby-debugger
