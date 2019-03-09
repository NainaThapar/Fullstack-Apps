## Usage

All responses will have the form

```json 
{
    "data" : "Mixed type holding the content of the response",
    "message": "Description of what happened"
}
```

Subsequent response definitions will only detail the expected value of `data field`

###List all recipes

**Definition**
`GET /recipes`

**Response**
- `200 OK` on success

```json
    [
      {
        "id": "chili-rellenos-casserole",
        "name": "Chili Rellenos Casserole",
        "recipe_img": "../images/feed1.jpg",
        "recipe_calories": 389,
        "recipe_protein": 13,
        "recipe_fats": 29,
        "recipe_carbohydrates": 30
      },
      {
        "id": "date-and-walnut-cupcake",
        "name": "Date and Walnut Cupcake",
        "recipe_img": "../images/feed4.jpg",
        "recipe_calories": 412,
        "recipe_protein": 33,
        "recipe_fats": 45,
        "recipe_carbohydrates": 59
      }
    ]
```

### Adding a new recipe

**Definition**

`Post /recipes`

**Arguements**

- `"id":string` a globally unique id for this recipe
-`"name":string` a name for the recipe
-`"recipe_img":string` url to get the image for the recipe
-`"recipe_calories":int` calories contained in this recipe
-`"recipe_protein":int` proteins contained in this recipe
-`"recipe_fats":int` fats contained in this recipe
-`"recipe_carbohydrates":int` carbohydrates contained in this recipe


If a recipe with a given id already exists, it won't be overwritten

**Response**

- `409 conflict` on similar request
- `201 created` on success

```json
    {
        "id": "chili-rellenos-casserole",
        "name": "Chili Rellenos Casserole",
        "recipe_img": "../images/feed1.jpg",
        "recipe_calories": 389,
        "recipe_protein": 13,
        "recipe_fats": 29,
        "recipe_carbohydrates": 30
    }
```

### Lookup recipe details

`GET /recipe/<id>`

**Response**

- `404 Not Found` if the recipe does not exist
- `200 OK` on success

```json
    {
        "id": "chili-rellenos-casserole",
        "name": "Chili Rellenos Casserole",
        "recipe_img": "../images/feed1.jpg",
        "recipe_calories": 389,
        "recipe_protein": 13,
        "recipe_fats": 29,
        "recipe_carbohydrates": 30
    }
```

## Delete a recipe

**Definition**

`DELETE /recipes/<id>`

- `404 Not Found` if the recipe does not exist
- `204 No Content` on success
