# Midterm Exam - AY24/25 - TE 201 428 - Artificial Intelligence

You can answer in English or Bahasa Indonesia. If you insert some images
to your markdown file, please use relative path and submit your work 
in a compressed file `.zip`.

For those who is coming from Group B, please read the tutorial [`markdown-template.md`](../markdown-template.md)
or ask your friend from Group A, if you want to submit in `.md` file. 
But you can submit your answer in Google Docs or Microsot Word. 
For all Group A students must submit in markdown files.

You may use ChatGPT, but be careful that it may give you a false answer 
and sometimes it is hallucinated. The point of learning is to understand what you write. 
Without understanding your answer by yourself, this exam is **useless**.

[**Notice**]: If you submit your answer in a compressed file, please make
sure that after you have done the compression, extract the compressed file
to make sure that you have compresed the right files.

**Task**:
Please check with your ITK Google account to find out the problem that 
you must complete for this midterm eaxm in [here](https://docs.google.com/spreadsheets/d/1kUYKjwUHuu043fv_B3L7LNxhE-BFlnxRrwQpvE7y3dM/edit?usp=sharing)

## Problem 1 (Genetic Algorithm)
Solve economic dispatch load using genetic algorithm. See the problem 
in [ga-pso-economic-dispatch-load.md](./ga-pso-economic-dispatch-load.md)

## Problem 2 (Particle Swarm Optimization)
Solve economic dispatch load using particle swarm optimizatin. See the problem
in [ga-pso-economic-dispatch-load.md](./ga-pso-economic-dispatch-load.md)

## Problem 3 (Fuzzy Inference System)
Solve diet program for the following cases
| Name      | Age | Sex | Height (cm) | Weight (kg) | Activity      |
|-----------|-----|-----|-------------|-------------|---------------|
| Grace     | 25  | F   | 165         | 70          | Merchant      |
| Kay       | 39  | F   | 160         | 54          | Civil Servant |
| Ethan     | 55  | M   | 169         | 77          | Lecturer      |
| Michael   | 30  | M   | 160         | 45          | Housewife     |
| Luna      | 17  | F   | 172         | 70          | Student       |
| Ray       | 70  | M   | 177         | 80          | Retiree       |
| Alexander | 26  | M   | 180         | 72          | Military Personnel |
| Sarah     | 15  | F   | 169         | 55          | Athelete      |

to estimate the calories are needed for them. Use the linguistic variables
and rule of inferences from [fis-diet-program.md](./fis-diet-program.md)

## Problem 4 (Neural Networks)
Solve the regression problem of Auto MPG data using fully connected layers.
Download the data from [here](https://archive.ics.uci.edu/dataset/9/auto+mpg).
To solve this problem, you need to do the tutorial of basic regression in 
[here](https://www.tensorflow.org/tutorials/keras/regression) which solves
the problem of predicting fuel efficiency. But your problem is 
predicting the horse power for given all the remaning features.