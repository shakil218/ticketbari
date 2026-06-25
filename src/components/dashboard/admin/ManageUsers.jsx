"use client";

import { Table, Button, Chip } from "@heroui/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { updateUserRole, updateFraudStatus } from "@/lib/actions/users";

export default function ManageUsers({ users = [] }) {
  const router = useRouter();

  const handleMakeVendor = async (email) => {
    const result = await updateUserRole(email, "vendor");

    if (result?.modifiedCount > 0) {
      toast.success("User promoted to Vendor");
      router.refresh();
    }
  };

  const handleMakeAdmin = async (email) => {
    const result = await updateUserRole(email, "admin");

    if (result?.modifiedCount > 0) {
      toast.success("User promoted to Admin");
      router.refresh();
    }
  };

  const handleFraudToggle = async (email, currentStatus) => {
    const result = await updateFraudStatus(email, !currentStatus);

    if (result?.modifiedCount > 0) {
      toast.success(currentStatus ? "Fraud removed" : "Vendor marked as fraud");

      router.refresh();
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Manage Users</h2>

      <Table aria-label="manage users table">
        <Table.ScrollContainer>
          <Table.Content>
            <Table.Header>
              <Table.Column isRowHeader>Name</Table.Column>

              <Table.Column>Email</Table.Column>

              <Table.Column>Role</Table.Column>

              <Table.Column>Status</Table.Column>

              <Table.Column>Actions</Table.Column>
            </Table.Header>

            <Table.Body>
              {users.map((user) => (
                <Table.Row key={user._id} id={user._id}>
                  <Table.Cell>
                    <p className="font-semibold">{user.name}</p>
                  </Table.Cell>

                  <Table.Cell>{user.email}</Table.Cell>

                  <Table.Cell>
                    <Chip
                      variant="soft"
                      color={
                        user.role === "admin"
                          ? "danger"
                          : user.role === "vendor"
                            ? "accent"
                            : "success"
                      }
                      className="capitalize"
                    >
                      {user.role || "user"}
                    </Chip>
                  </Table.Cell>

                  <Table.Cell>
                    {user.role === "vendor" ? (
                      <Chip
                        variant="soft"
                        color={user.isFraud ? "danger" : "success"}
                      >
                        {user.isFraud ? "Fraud" : "Verified"}
                      </Chip>
                    ) : (
                      "-"
                    )}
                  </Table.Cell>

                  <Table.Cell>
                    <div className="flex flex-wrap gap-2">
                      <Button
                        size="sm"
                        variant="primary"
                        isDisabled={user.role === "vendor"}
                        onPress={() => handleMakeVendor(user.email)}
                      >
                        Make Vendor
                      </Button>

                      <Button
                        size="sm"
                        variant="danger"
                        isDisabled={user.role === "admin"}
                        onPress={() => handleMakeAdmin(user.email)}
                      >
                        Make Admin
                      </Button>

                      {user.role === "vendor" && (
                        <Button
                          size="sm"
                          className="bg-warning text-black"
                          onPress={() =>
                            handleFraudToggle(user.email, user.isFraud)
                          }
                        >
                          {user.isFraud ? "Remove Fraud" : "Mark Fraud"}
                        </Button>
                      )}
                    </div>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>

      {users.length === 0 && (
        <div className="text-center py-10 text-default-500">
          No users found.
        </div>
      )}
    </div>
  );
}
