# 🧮 Cosine Similarity Calculator

This project implements a C++ program to calculate the cosine similarity between two text inputs. The program tokenizes the input, computes word frequencies, and calculates the cosine similarity score.

## 🚀 Quickstart

1. Clone the repository:

   ```sh
   git clone https://github.com/your-repository/CosineSimilarity.git
   ```

2. Compile the program using `g++`:

   ```sh
   g++ CosineSimilarity.cpp -o CosineSimilarity
   ```

3. Run the program:
   ```sh
   ./CosineSimilarity
   ```

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
