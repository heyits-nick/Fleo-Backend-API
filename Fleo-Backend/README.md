# Fleo-Backend
Design and develop a data-model with REST APIs to store and retrieve the above-mentioned Company target sales and current sales.

- The model should support storage and retrieval of different categories.
- Below is a list of APIs/scenarios that need to be implemented.
    - Create a category with current and total target sales
    - Update a category’s current sales value and target sales value. (Should update the progress percentage along with related details such as color code and progress percentage in the hierarchy).
    - Other details related to category such as category ID, progress%, bar color, category name and progress label have to be auto created based on the current and target sales.
    - Retrieve the category details along with the n-th level child. (Specify the category ID along with number of levels to be retrieved)
    - Get the related parents for a category. Return empty if no parent is found.
    - Delete a category from the hierarchy. Specify a flag to delete its children or just the category. If only a category is to be deleted and not its children then the hierarchy link breaks and the next child category becomes an orphan.
