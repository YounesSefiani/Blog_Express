const AbstractManager = require("./AbstractManager");

class authorManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "author" as configuration
    super({ table: "author" });
  }

  // The C of CRUD - Create operation

  async create(author) {
    // Execute the SQL INSERT query to add a new author to the "author" table
    const [result] = await this.database.query(
      `insert into ${this.table} (title) values (?)`,
      [author.title]
    );

    // Return the ID of the newly inserted author
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific author by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the author
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all authors from the "author" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of authors
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing author

  // async update(author) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an author by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = authorManager;
