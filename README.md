# Shortner API

A simple API for shortening and retrieving links.

## [Documentation](#docs)

### Routes

- Shorten a Link:

  - Endpoint: `/shorten`
  - Method: POST
  - Example Request using `fetch`:
    ```javascript
    fetch("{{BASEURL}}/shorten", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: "https://example.com" }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
    ```
  - Example Response:
    ```json
    {
      "id": "abc123",
      "shortUrl": "{{baseurl}}/abc123",
      "expireAt": "12/04/2025"
    }
    ```

- Use Shortened Link:
  - Endpoint: `{{BASEURL}}/:id`
  - Open the link in your browser
  

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/Timi-Leyin/shortner-api.git
   ```

1. Install dependencies:

   ```bash
   cd shortner-api
   npm install
   ```

1. Start the API:

   ```bash
      npm start
   ```

   The API will be accessible at http://localhost:your-port.

## Contributing
If you'd like to contribute, please fork the repository and create a pull request. Make sure to follow the [Contributing Guidelines.](#)

## License
This project is licensed under the MIT License.