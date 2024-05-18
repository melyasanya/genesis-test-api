## Project Setup

1. Clone the repo:

   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. Create file `.env` based on `example.env`:

   ```bash
   cp example.env .env
   ```

3. Open the `.env` and fill it with your values:

   ```plaintext
   DB_HOST=your_database_url
   DB_NAME=your_database_name
   EMAIL=email
   PASSWORD=app_password
   ```

   If needed, I can provide you with my `.env` file

4. Start the project using Docker Compose::

   ```bash
   docker-compose up --build
   ```
