const AbstractManager = require("./AbstractManager");

class articleManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "article" as configuration
    super({ table: "article" });
  }

  // The C of CRUD - Create operation

  async create(article) {
    // Execute the SQL INSERT query to add a new article to the "article" table
    const [result] = await this.database.query(
      `insert into ${this.table} (title, description, content, image_src, image_alt, author_id ) values (?, ?, ?, ?, ?, ?)`,
      [
        article.title,
        article.description,
        article.content,
        article.image_src,
        article.image_alt,
        article.author_id,
      ]
    );

    // Return the ID of the newly inserted article
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific article by its ID
    const [rows] = await this.database.query(
      `select article.id, article.title, article.description, article.content, article.created_at, article.image_src, article.image_alt, CONCAT(author.firstname, " ", author.lastname) as fullname from ${this.table} inner join author on author.id = ${this.table}.author_id where ${this.table}.id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the article
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all articles from the "article" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of articles
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing article

  // async update(article) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an article by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = articleManager;
