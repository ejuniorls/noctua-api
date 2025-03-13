const chalk = require("chalk");

class Service {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    console.error("DATA", data);

    return this.model.create(data);
  }

  async findAll(options = {}, limit, offset) {
    console.log(options, limit, offset);
    return this.model.findAndCountAll(options, limit, offset);
  }

  async findById(id, options = {}) {
    const item = await this.model.findByPk(id, options);
    if (!item) throw new Error("record not found");
    return item;
  }

  async update(id, data) {
    const record = await this.model.findByPk(id);
    if (!record) throw new Error("record not found");

    console.error("DATA", data);

    await record.update(data);
    return await this.model.findByPk(id);
    // return record.update(data);
  }

  async delete(id) {
    const record = await this.model.findByPk(id);
    if (!record) throw new Error("record not found");
    await this.model.destroy({ where: { id } }); // soft delete
    return { message: "record successfully deactivated" };
  }

  async restore(id) {
    const record = await this.model.findByPk(id, { paranoid: false }); // fetch rows including soft deleted
    console.log(record);
    if (!record) throw new Error("record not found");

    console.error(chalk.red.bold(record.deletedAt));

    // Verifica se o registro já está ativado
    if (record.deletedAt == null) throw new Error("record already activated");

    // Restaura o registro
    await record.restore();

    return { message: "record successfully activated" };
  }
}

module.exports = Service;
