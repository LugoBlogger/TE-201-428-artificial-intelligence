# Assignment 4

Full name (Student ID Number)

You can answer in English or Bahasa Indonesia. If you insert some images
to your markdown file, please use relative path and submit your work 
in a compressed file `.zip`.


You may use ChatGPT, but be careful that it may give you a false answer 
and sometimes it is hallucinated. The point of learning is to understand what you write. 
Without understanding your answer by yourself, this assignment is useless.

[**Notice**]: If you submit your answer in a compressed file, please make
sure that after you have done the compression, extract the compressed file
to make sure that you have compresed the right files.


## Problem 1 (70 points)

During the lecture of Week-07, we have seen how to build a letter recognition 
using convolutional network. In this task, you need to explore if it is 
possible to create an image classification only using several stacked of
convolutional layers. For the starting point, you have to use two stacked
layers of convolutional layers with different number of kernels.

You goal is to find out the least number of trainable parameters that you 
can get and its accuracy for testing data is higher than 92%. The number
of trainable parameters in the given example during the class is 696,165 
parameters.  Your number of trainable parameters must less than this number.
You must use a single fully connected neural network (`tf.keras.Dense()`)
just for the flattening.

## Problem 2 (30 points)
Instead of dividing the dataset into training and testing, divide
the training data into training and validation. Use the ratio 80:20
for training and validation respectively. Did you get a better result
in testing data?