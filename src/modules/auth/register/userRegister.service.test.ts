import prisma from "../../../config/database";
import { createUser } from "./usersRegister.service";

jest.mock("../../../config/database", () => ({
  user: {
    findUnique: jest.fn(),
    create: jest.fn(),
    count: jest.fn(),
  }
}));

describe("User Register Service", () => {
  it("Deve retornar erro se o email já existir", async () => {
    (prisma.user.findUnique as jest.Mock).mockResolvedValue({ id: 123, email: "test@email.com" });

    const result = await createUser({
      name: "Matheus",
      email: "test@email.com",
      password: "123456",
      role: "admin",
    });

    expect(result.error).toBe("Error: Email already exists");
  });

  it("Deve criar usuario novo", async () => {
    (prisma.user.findUnique as jest.Mock).mockResolvedValue(null);
    (prisma.user.count as jest.Mock).mockResolvedValue(0);
    (prisma.user.create as jest.Mock).mockResolvedValue({
      id: "456",
      name: "Matheus",
      email: "novo@email.com"
    });

    const result = await createUser({
      name: "Matheus",
      email: "novo@email.com",
      password: "123456",
      role: "admin"
    });

    expect((await result).user).toHaveProperty("id");
    expect((await result).user?.email).toBe("novo@email.com");
  });

  afterAll(async () => {
    if (typeof prisma.$disconnect === "function") {
      await prisma.$disconnect();
    }
    jest.clearAllMocks();
  });
});
