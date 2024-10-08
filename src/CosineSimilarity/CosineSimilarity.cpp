#include <iostream>      // Input/output streams
#include <string>        // For string handling
#include <sstream>       // For string stream operations
#include <unordered_map> // For hash maps (word frequencies)
#include <cmath>         // For math functions like sqrt
#include <iomanip>       // For controlling output format

int main()
{
    // Initiate the Cosine Similarity Calculator
    std::cout << "Welcome to the Cosine Similarity Calculator\n";

    // Variables to hold user inputs
    std::string textAlpha, textBeta;

    // Get the first text input
    std::cout << "\nPlease enter the first text snippet: ";
    std::getline(std::cin, textAlpha);

    // Get the second text input
    std::cout << "\nPlease enter the second text snippet: ";
    std::getline(std::cin, textBeta);

    // Let's create frequency maps for both texts
    std::unordered_map<std::string, int> frequencyMapAlpha, frequencyMapBeta;

    // Lambda function to tokenize text and count word frequencies
    auto tokenizeAndCount = [](const std::string &text, std::unordered_map<std::string, int> &freqMap)
    {
        std::stringstream ss(text);
        std::string word;
        while (ss >> word)
        {
            // Convert word to lowercase to make counting case-insensitive
            for (auto &ch : word)
            {
                ch = std::tolower(ch);
            }
            // Increase the count for this word
            freqMap[word]++;
        }
    };

    // Tokenize and count words in both texts
    tokenizeAndCount(textAlpha, frequencyMapAlpha);
    tokenizeAndCount(textBeta, frequencyMapBeta);

    // Now, let's compute the cosine similarity
    double numerator = 0.0; // Dot product
    double denominatorAlpha = 0.0;
    double denominatorBeta = 0.0;

    // Calculate numerator and denominatorAlpha
    for (const auto &entry : frequencyMapAlpha)
    {
        const std::string &word = entry.first;
        int countAlpha = entry.second;
        int countBeta = frequencyMapBeta[word]; // Defaults to 0 if word not present
        numerator += countAlpha * countBeta;
        denominatorAlpha += countAlpha * countAlpha;
    }

    // Calculate denominatorBeta
    for (const auto &entry : frequencyMapBeta)
    {
        int countBeta = entry.second;
        denominatorBeta += countBeta * countBeta;
    }

    // Compute the cosine similarity score
    double cosSimScore = 0.0;
    if (denominatorAlpha > 0 && denominatorBeta > 0)
    {
        cosSimScore = numerator / (std::sqrt(denominatorAlpha) * std::sqrt(denominatorBeta));
    }
    else
    {
        // Handle the edge case where one of the texts has no words
        cosSimScore = 0.0;
    }

    // Display the cosine similarity score with four decimal places
    std::cout << std::fixed << std::setprecision(4);
    std::cout << "\nThe cosine similarity between the two texts is: " << cosSimScore << "\n";

    // Time to visualize the similarity score with a diamond shape
    // The size of the diamond will be proportional to the similarity score

    // Map the similarity score to a diamond size between 3 and 15
    int minDiamondSize = 2;
    int maxDiamondSize = 10;
    int diamondSize = minDiamondSize + static_cast<int>((maxDiamondSize - minDiamondSize) * cosSimScore + 0.5);

    // Ensure the diamond size is within bounds
    if (diamondSize < minDiamondSize)
    {
        diamondSize = minDiamondSize;
    }

    // Let's render the diamond
    std::cout << "\nDiamond of Similarity:\n";

    int n = diamondSize; // The number of rows in the upper half of the diamond

    // Upper half of the diamond
    for (int i = 1; i <= n; ++i)
    {
        // Print leading spaces
        std::cout << std::string(n - i, ' ');
        // Print the asterisks
        std::cout << std::string(2 * i - 1, '*');
        // Move to the next line
        std::cout << "\n";
    }

    // Lower half of the diamond
    for (int i = n - 1; i >= 1; --i)
    {
        // Print leading spaces
        std::cout << std::string(n - i, ' ');
        // Print the asterisks
        std::cout << std::string(2 * i - 1, '*');
        // Move to the next line
        std::cout << "\n";
    }

    // Farewell message
    std::cout << "\nThanks for using the Cosine Similarity Calculator\n";

    return 0;
}
