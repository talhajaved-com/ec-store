import User_Model from "../models/authModel.js";

// Get all customers
export const getAllCustomers = async (req, res) => {
  try {
    const allCustomers = await User_Model.find();
    res.status(200).json(allCustomers);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Update customer role
export const updateCustomerRole = async (req, res) => {
  const { id } = req.params;
  const { role } = req.body;

  try {
    if (![0, 1].includes(role)) {
      return res.status(400).send({
        success: false,
        message: "Invalid role value.",
      });
    }

    const customer = await User_Model.findById(id);
    if (!customer) {
      return res.status(404).send({
        success: false,
        message: "Customer not found.",
      });
    }

    customer.role = role;
    await customer.save();

    res.status(200).send({
      success: true,
      message: "Customer role updated successfully.",
      customer,
    });
  } catch (error) {
    console.error("Error updating customer role:", error);
    res.status(500).send({
      success: false,
      message: "Error updating customer role.",
      error: error.message,
    });
  }
};
