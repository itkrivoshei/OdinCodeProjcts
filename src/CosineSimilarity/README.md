# 🧮 Cosine Similarity Calculator

This project implements a C++ program to calculate the cosine similarity between two text inputs. The program tokenizes the input, computes word frequencies, and calculates the cosine similarity score.

Source code for this project can be found [here](https://github.com/itkrivoshei/OdinCodeProjcts/blob/main/src/CosineSimilarity/CosineSimilarity.cpp).

## 🚀 Quickstart

1. **Download the source code**:

   - Visit the project repository: [Cosine Similarity Source Code](https://github.com/itkrivoshei/OdinCodeProjcts/blob/main/src/CosineSimilarity/CosineSimilarity.cpp).
   - Download the `CosineSimilarity.cpp` file or copy the code.

2. **Run the code**:
   - You can either:
     - **Compile and run it locally**:
       - Save the downloaded file as `CosineSimilarity.cpp`.
       - Open your terminal and compile the program using `g++`:
         ```sh
         g++ CosineSimilarity.cpp -o CosineSimilarity
         ```
       - Run the compiled program:
         ```sh
         ./CosineSimilarity
         ```
     - **Use an online compiler**:
       - Copy the code from the file and paste it into an online C++ compiler, such as [OnlineGDB](https://www.onlinegdb.com/online_c++_compiler).
       - Run the program directly from the online compiler.

## 🧬 Code Overview

The project includes the following key features:

| Function                  | Description                                         | Accepts            | Returns  |
| ------------------------- | --------------------------------------------------- | ------------------ | -------- |
| `tokenizeAndCount`        | Tokenizes text and counts word frequencies          | `std::string, map` | `void`   |
| `computeCosineSimilarity` | Computes cosine similarity between two texts        | `map, map`         | `double` |
| `renderDiamond`           | Displays a diamond shape proportional to similarity | `int`              | `void`   |

## ✨ Features

- Tokenizes input text into words.
- Calculates word frequencies and cosine similarity.
- Visualizes the similarity score with a diamond shape.
