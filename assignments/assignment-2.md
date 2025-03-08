# Assignment 2

Full name (Student ID Number)

You can answer in English or Bahasa Indonesia. If you insert some images
to your markdown file, please use relative path and submit your work 
in a compressed file `.zip`.

You may use ChatGPT, but be careful that it may give you a false answer 
and sometimes it is hallucinated. The point of learning is to understand what you write. 
Without understanding your answer by yourself, this assignment is useless.

## Problem 1 (70 points)

Using the program from Week-03 (`pso-case-01-one-dim.ipynb`), explore 
all the following settings of the three paramters $w$, $c_1$ and $c_2$
in that Jupyter notebook. Here is the list

- $w=0.4$, $c_1 \in [1, 3]$, $c_2 \in [1, 3]$
- $w=0.5$, $c_1 \in [1, 3]$, $c_2 \in [1, 3]$
- $w=0.6$, $c_1 \in [1, 3]$, $c_2 \in [1, 3]$
- $w=0.7$, $c_1 \in [1, 3]$, $c_2 \in [1, 3]$
- $w=0.8$, $c_1 \in [1, 3]$, $c_2 \in [1, 3]$
- $w=0.9$, $c_1 \in [1, 3]$, $c_2 \in [1, 3]$

You need to observe the best solution for $\mathbf{x}$ and record
all the results. You may use the steps of the parameters 
$c_1$ and $c_2$ with a step of 0.2. So you will have all the 
possible values of $\mathbf{x}$ from the these product sets of $c_1$ and $c_2$
where $c_1 = c_2 = [1.0, 1.2, 1.4, 1.6, 1.8, 2.0, 2.2, 2.4, 2.6, 2.6, 3.0]$.
Set the other settings: `N_sample=10`, `sf_max = 0.001`, and `G_max=100`.



## Problem 2 (30 points)

Draw three-dimensional surface with the $x$-axis and $y$-axis are
the all possible values of $c_1$ and $c_2$, respectively, and the $z$-axis
represents the the global best solution $\mathbf{x}_{g, \text{best}}$
at final generation.  In this plot, you need to set $w=0.5$.
For all pairs of $c_1$ and $c_2$, you also have to set the `seed` to be 
a constant. For instance `seed=25_03_09`.