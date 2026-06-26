"use client";
import React, { useState, useEffect } from "react";
import {
  Form,
  TextField,
  Label,
  Input,
  Select,
  ListBox,
  CheckboxGroup,
  Checkbox,
  Button,
  Card,
  FieldError,
} from "@heroui/react";
import {
  Save,
  X,
  UploadCloud,
  Bus,
  MapPin,
  Calendar,
  DollarSign,
  Layers,
  User,
  Mail,
  Heading,
  Wifi,
  Wind,
  Utensils,
  BatteryCharging,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { updateTicketWithVendor } from "@/lib/actions/tickets"; 
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function UpdateTicketForm({ ticket }) {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  // Form States pre-populated with existing ticket data
  const [transportType, setTransportType] = useState(ticket?.transportType || "");
  const [perks, setPerks] = useState(ticket?.perks || []);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(ticket?.imageUrl || "");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Synchronize dynamic state changes if initial ticket loads asynchronously
  useEffect(() => {
    if (ticket) {
      setTransportType(ticket.transportType || "");
      setPerks(ticket.perks || []);
      setImagePreview(ticket.imageUrl || "");
    }
  }, [ticket]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formElement = e.currentTarget;
    const formFields = Object.fromEntries(new FormData(formElement));

    try {
      // Retain existing URL unless a completely new file is supplied
      let finalImageUrl = ticket?.imageUrl || "";

      if (imageFile) {
        const imgData = new FormData();
        const IMGBB_API_KEY = process.env.NEXT_PUBLIC_IMGBB_API_KEY;
        imgData.append("image", imageFile);

        const imgbbResponse = await fetch(
          `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`,
          {
            method: "POST",
            body: imgData,
          }
        );
        const imgbbResult = await imgbbResponse.json();
        if (imgbbResult.success) {
          finalImageUrl = imgbbResult.data.url;
        } else {
          toast.error("Image upload failed. Reverting to older reference image.");
        }
      }

      const updatedPayload = {
        title: formFields.ticketTitle,
        from: formFields.fromLocation,
        to: formFields.arrivalDestination,
        transportType: transportType,
        price: parseFloat(formFields.price),
        quantity: parseInt(formFields.quantity),
        departureTime: formFields.departureDateTime,
        perks: perks,
        imageUrl: finalImageUrl,
        vendorName: ticket?.vendorName || user?.name || "Unknown Vendor",
        vendorEmail: ticket?.vendorEmail || user?.email || "Unknown Email",
        status: ticket?.status || "pending", 
      };

      const res = await updateTicketWithVendor(ticket._id, updatedPayload);
      
      if (res?.success || res?.modifiedCount > 0) {
        toast.success("Ticket configurations modified successfully!");
        router.push("/dashboard/vendor/my-added-tickets");
        router.refresh(); 
      } else {
        toast.error("No modifications detected or failed to save layout update.");
      }
    } catch (error) {
      toast.error("An unexpected error occurred during database modification handling.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground py-10 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Update Ticket Settings
            </h1>
            <p className="text-sm text-default-500 mt-1">
              Modify details for your active transport service listing.
            </p>
          </div>
          <Button
            size="sm"
            variant="flat"
            color="danger"
            onClick={() => router.push("/dashboard/vendor/my-added-tickets")}
            className="w-fit self-start sm:self-center"
          >
            <X className="w-4 h-4 mr-1" /> Cancel Edits
          </Button>
        </div>

        {/* Hero UI Native Form Container */}
        <Form
          onSubmit={handleSubmit}
          validationBehavior="native"
          className="w-full"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full items-start">
            {/* LEFT COLUMN */}
            <div className="col-span-1 lg:col-span-7 space-y-6">
              {/* VENDOR DETAILS */}
              <Card className="p-6 border border-divider">
                <Card.Content className="space-y-4">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-default-500 mb-2">
                    Vendor Verification Profile
                  </h2>
                  
                  {/* Vendor Name field */}
                  <TextField
                    isReadOnly
                    name="vendorName"
                    value={ticket?.vendorName || user?.name || "Vendor Name"}
                    className="w-full"
                  >
                    <Label className="text-sm font-medium block mb-1.5 text-default-700">
                      Vendor Account
                    </Label>
                    <div className="relative flex items-center">
                      <User className="absolute left-3 text-default-400 w-4 h-4" />
                      <Input className="w-full pl-9 pr-3 py-2 bg-default-100 rounded-lg border-none focus:outline-none cursor-not-allowed opacity-80" />
                    </div>
                  </TextField>

                  {/* Vendor Email Field */}
                  <TextField
                    isReadOnly
                    name="vendorEmail"
                    value={ticket?.vendorEmail || user?.email || "vendor@example.com"}
                    className="w-full"
                  >
                    <Label className="text-sm font-medium block mb-1.5 text-default-700">
                      Contact Email
                    </Label>
                    <div className="relative flex items-center">
                      <Mail className="absolute left-3 text-default-400 w-4 h-4" />
                      <Input className="w-full pl-9 pr-3 py-2 bg-default-100 rounded-lg border-none focus:outline-none cursor-not-allowed opacity-80" />
                    </div>
                  </TextField>
                </Card.Content>
              </Card>

              {/* JOURNEY DETAILS */}
              <Card className="p-6 border border-divider">
                <Card.Content className="space-y-5">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-default-500 mb-1">
                    Route & Information Parameters
                  </h2>

                  {/* Ticket Title */}
                  <TextField 
                    isRequired 
                    name="ticketTitle" 
                    defaultValue={ticket?.title || ""} 
                    className="w-full"
                  >
                    <div className="relative flex items-center">
                      <Heading className="absolute left-3 text-default-400 w-4 h-4" />
                      <Input
                        placeholder="e.g., Express Bus to City Center"
                        className="w-full pl-9 pr-3 py-2 rounded-lg border border-default-300 dark:border-default-600 bg-transparent"
                      />
                    </div>
                    <FieldError className="text-xs text-danger mt-1" />
                  </TextField>

                  {/* Transport Select */}
                  <Select
                    isRequired
                    name="transportType"
                    placeholder="Select Transport Type"
                    value={transportType}
                    onChange={(val) => setTransportType(val)}
                    className="w-full"
                  >
                    <Select.Trigger className="w-full flex items-center justify-between px-3 py-2 rounded-lg border border-default-300 dark:border-default-600 bg-transparent text-left text-sm text-default-700 dark:text-default-300">
                      <div className="flex items-center gap-2">
                        <Bus className="text-default-400 w-4 h-4" />
                        <Select.Value />
                      </div>
                      <Select.Indicator>
                        <ChevronDown className="w-4 h-4 text-default-400" />
                      </Select.Indicator>
                    </Select.Trigger>

                    <Select.Popover>
                      <ListBox className="bg-content1 border border-divider rounded-lg shadow-md p-1 min-w-50">
                        {["Bus", "Train", "Launch / Ship", "Air"].map((item) => (
                          <ListBox.Item
                            key={item}
                            id={item}
                            textValue={item}
                            className="px-3 py-2 hover:bg-default-100 dark:hover:bg-default-800 rounded-md cursor-pointer text-sm"
                          >
                            {item}
                          </ListBox.Item>
                        ))}
                      </ListBox>
                    </Select.Popover>
                  </Select>

                  {/* Route Timeline Maps */}
                  <div className="relative space-y-5">
                    <div className="absolute left-4.5 top-5 bottom-5 w-[1.5px] border-l-2 border-dashed border-divider z-0"></div>

                    <TextField
                      isRequired
                      name="fromLocation"
                      defaultValue={ticket?.from || ""}
                      className="w-full z-10"
                    >
                      <div className="relative flex items-center">
                        <MapPin className="absolute left-3 text-default-400 w-4 h-4" />
                        <Input
                          placeholder="Departure Location"
                          className="w-full pl-9 pr-3 py-2 rounded-lg border border-default-300 dark:border-default-600 bg-background"
                        />
                      </div>
                      <FieldError className="text-xs text-danger mt-1" />
                    </TextField>

                    <TextField
                      isRequired
                      name="arrivalDestination"
                      defaultValue={ticket?.to || ""}
                      className="w-full z-10"
                    >
                      <div className="relative flex items-center">
                        <MapPin className="absolute left-3 text-success w-4 h-4" />
                        <Input
                          placeholder="Arrival Destination"
                          className="w-full pl-9 pr-3 py-2 rounded-lg border border-default-300 dark:border-default-600 bg-background"
                        />
                      </div>
                      <FieldError className="text-xs text-danger mt-1" />
                    </TextField>
                  </div>

                  {/* Date Time */}
                  <TextField
                    isRequired
                    name="departureDateTime"
                    defaultValue={ticket?.departureTime || ""}
                    className="w-full"
                  >
                    <div className="relative flex items-center">
                      <Calendar className="absolute left-3 text-default-400 w-4 h-4" />
                      <Input
                        type="datetime-local"
                        className="w-full pl-9 pr-3 py-2 rounded-lg border border-default-300 dark:border-default-600 bg-transparent"
                      />
                    </div>
                    <FieldError className="text-xs text-danger mt-1" />
                  </TextField>
                </Card.Content>
              </Card>
            </div>

            {/* RIGHT COLUMN */}
            <div className="col-span-1 lg:col-span-5 space-y-6">
              {/* PRICING & QUANTITY */}
              <Card className="p-6 border border-divider">
                <Card.Content className="grid grid-cols-2 gap-4">
                  <TextField isRequired name="price" defaultValue={ticket?.price || ""}>
                    <Label className="text-xs font-medium block mb-1 text-default-600">
                      Price per Unit ($)
                    </Label>
                    <div className="relative flex items-center">
                      <DollarSign className="absolute left-3 text-default-400 w-4 h-4" />
                      <Input
                        type="number"
                        step="0.01"
                        placeholder="0.00"
                        className="w-full pl-9 pr-3 py-2 rounded-lg border border-default-300 dark:border-default-600 bg-transparent"
                      />
                    </div>
                    <FieldError className="text-xs text-danger mt-1" />
                  </TextField>

                  <TextField isRequired name="quantity" defaultValue={ticket?.quantity || ""}>
                    <Label className="text-xs font-medium block mb-1 text-default-600">
                      Available Stock
                    </Label>
                    <div className="relative flex items-center">
                      <Layers className="absolute left-3 text-default-400 w-4 h-4" />
                      <Input
                        type="number"
                        placeholder="Qty"
                        className="w-full pl-9 pr-3 py-2 rounded-lg border border-default-300 dark:border-default-600 bg-transparent"
                      />
                    </div>
                    <FieldError className="text-xs text-danger mt-1" />
                  </TextField>
                </Card.Content>
              </Card>

              {/* INCLUDED PERKS */}
              <Card className="p-6 border border-divider">
                <Card.Content>
                  <CheckboxGroup
                    name="perks"
                    value={perks}
                    onChange={(values) => setPerks(values)}
                    className="gap-2"
                  >
                    <Label className="text-xs font-bold uppercase tracking-wider text-default-500 mb-2 block">
                      Included Service Perks
                    </Label>

                    <div className="grid grid-cols-2 gap-x-6 gap-y-4 w-full">
                      {[
                        { val: "AC", icon: Wind },
                        { val: "WiFi", icon: Wifi },
                        { val: "Meals", icon: Utensils },
                        { val: "Charging", icon: BatteryCharging },
                      ].map(({ val, icon: Icon }) => (
                        <Checkbox key={val} value={val}>
                          <Checkbox.Content className="flex items-center gap-2 text-sm text-default-700 dark:text-default-300">
                            <Checkbox.Control />
                            <Icon className="w-4 h-4 text-default-400" />
                            <span>{val}</span>
                          </Checkbox.Content>
                        </Checkbox>
                      ))}
                    </div>
                  </CheckboxGroup>
                </Card.Content>
              </Card>

              {/* IMAGE SELECTION BLOCK */}
              <Card className="p-6 border border-divider">
                <Card.Content>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-default-500 mb-4">
                    Listing Banner Art
                  </h2>

                  <label className="flex items-center gap-4 w-full cursor-pointer group">
                    {/* Box container for Icon or Image Preview */}
                    <div className="shrink-0 w-20 h-20 border-2 border-dashed border-default-300 dark:border-default-700 rounded-xl flex items-center justify-center bg-default-50 dark:bg-default-900/50 group-hover:bg-default-100 dark:group-hover:bg-default-900 transition-all overflow-hidden relative">
                      {imagePreview ? (
                        <>
                          <Image
                            src={imagePreview}
                            alt="Preview"
                            width={80}
                            height={80}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <UploadCloud className="w-5 h-5 text-white" />
                          </div>
                        </>
                      ) : (
                        <UploadCloud className="w-6 h-6 text-default-400 group-hover:text-default-500 transition-colors" />
                      )}
                    </div>

                    {/* Typography Content on the Right */}
                    <div className="flex flex-col">
                      <p className="text-sm text-default-800 dark:text-default-200 font-semibold tracking-wide">
                        Upload image
                      </p>
                      <p className="text-xs text-default-400 mt-0.5">
                        PNG, JPG up to 5MB
                      </p>
                    </div>

                    {/* Hidden Native File Input */}
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageChange}
                    />
                  </label>
                </Card.Content>
              </Card>

              {/* ACTION EXECUTE BUTTON */}
              <div className="flex justify-end pt-2">
                <Button
                  type="submit"
                  size="lg"
                  isLoading={isSubmitting}
                  className="bg-linear-to-r from-violet-500 via-purple-500 to-indigo-500 text-white font-medium shadow-sm px-6 rounded-xl flex items-center gap-2"
                >
                  {!isSubmitting && <Save className="w-5 h-5" />}
                  Save Ticket Adjustments
                </Button>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}