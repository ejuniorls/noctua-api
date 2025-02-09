class Service {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    return this.model.create(data);
  }

  async findAll(options = {}) {
    return this.model.findAll(options);
  }

  async findById(id, options = {}) {
    const item = await this.model.findByPk(id, options);
    if (!item) throw new Error("record not found");
    return item;
  }

  async update(id, data) {
    const record = await this.model.findByPk(id);
    if (!record) throw new Error("record not found");
    return record.update(data);
  }

  async delete(id) {
    const record = await this.model.findByPk(id);
    if (!record) throw new Error("record not found");
    await this.model.destroy({ where: { id } }); // soft delete
    return { message: "record successfully deactivated" };
  }

  async restore(id) {
    const user = await this.model.findByPk(id, { paranoid: false }); // fetch rows including soft deleted
    if (!user) throw new Error("record not found");
    if (!user.deletedAt) throw new Error("record already activated");

    await user.restore(); // Restaura o registro
    return { message: "record successfully activated" };
  }
}

module.exports = Service;
