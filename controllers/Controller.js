const chalk = require("chalk");

class Controller {
  constructor(service) {
    this.service = service;
  }

  async create(req, res) {
    try {
      const result = await this.service.create(req.body);
      res.status(201).json({ status: true, response: result });
    } catch (error) {
      console.log(chalk.bgRed.bold(error));

      // const customErrorMessages = error.errors.map((err) => {
      //   return err.message;
      // });

      // if (error.name === "SequelizeValidationError") {
      //   res
      //     .status(400)
      //     .json({ status: false, error: customErrorMessages.join(", ") });
      // } else if (error.name === "SequelizeUniqueConstraintError") {
      //   res
      //     .status(400)
      //     .json({ status: false, error: customErrorMessages.join(", ") });
      // } else {
      //   res.status(400).json({ status: false, error: error.message });
      // }

      res.status(400).json({ status: false, error: error.message });
    }
  }

  async findAll(req, res) {
    try {
      const result = await this.service.findAll();
      res.status(200).json({ status: true, response: result });
    } catch (error) {
      res.status(400).json({ status: false, error: error.message });
    }
  }

  async findById(req, res) {
    try {
      const result = await this.service.findById(req.params.id);
      res.status(200).json({ status: true, response: result });
    } catch (error) {
      if (error.message === "record not found") {
        return res.status(404).json({ status: false, error: error.message });
      }
      res.status(400).json({ status: false, error: error.message });
    }
  }

  async update(req, res) {
    try {
      const result = await this.service.update(req.params.id, req.body);
      res.status(200).json({ status: true, response: result });
    } catch (error) {
      if (error.message === "record not found") {
        return res.status(404).json({ status: false, error: error.message });
      }
      res.status(400).json({ status: false, error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const result = await this.service.delete(req.params.id);
      res.status(200).send({ status: true, message: result.message });
    } catch (error) {
      if (error.message === "record not found") {
        return res.status(404).json({ status: false, error: error.message });
      }
      res.status(400).json({ status: false, error: error.message });
    }
  }

  async restore(req, res) {
    try {
      const result = await this.service.restore(req.params.id);
      res.status(200).json({ status: true, message: result.message });
    } catch (error) {
      if (
        error.message === "record not found" ||
        error.message === "record already activated"
      ) {
        return res.status(404).json({ status: false, error: error.message });
      }
      res.status(400).json({ status: false, error: error.message });
    }
  }
}

module.exports = Controller;
