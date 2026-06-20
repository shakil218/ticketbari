"use client";
import React, { useState } from "react";
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
  FieldError
} from "@heroui/react";
import { 
  Plus, 
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
  ChevronDown
} from "lucide-react";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";

export default function AddTicketForm() {
  const {data:session, isPending} = authClient.useSession();
  const user = session?.user;
  const vendorInfo = {
    name: user?.name,
    email: user?.email,
  };

  // Form States
  const [transportType, setTransportType] = useState("");
  const [perks, setPerks] = useState([]);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    // Capture simple form entries
    const formFields = Object.fromEntries(new FormData(e.currentTarget));

    try {
      let imageUrl = "sagfgjl;algaldsl";
      
      // Image upload routine to ImgBB
      // if (imageFile) {
      //   const imgData = new FormData();
      //   const IMGBB_API_KEY = "YOUR_IMGBB_API_KEY"; 
      //   imgData.append("image", imageFile);

      //   const imgbbResponse = await fetch(`https://api.imgbb.com/1/upload?key=%7BYOUR_IMGBB_API_KEY%7D`, {
      //     method: "POST",
      //     body: imgData,
      //   });
      //   const imgbbResult = await imgbbResponse.json();
      //   if (imgbbResult.success) {
      //     imageUrl = imgbbResult.data.url;
      //   }
      // }

      // Merge standard entries with local component array state
      const ticketPayload = {
        title: formFields.ticketTitle,
        from: formFields.fromLocation,
        to: formFields.arrivalDestination,
        transportType: transportType, 
        price: parseFloat(formFields.price),
        quantity: parseInt(formFields.quantity),
        departureTime: formFields.departureDateTime,
        perks: perks,                 
        imageUrl: imageUrl,
        vendorName: vendorInfo.name,  
        vendorEmail: vendorInfo.email, 
        status: "pending" 
      };

      console.log("Submitting Ticket Payload:", ticketPayload);
      // alert("Ticket saved successfully with verification status: pending!");
      
      // Clear all state forms cleanly
      // setTransportType("");
      // setPerks([]);
      // setImageFile(null);
      // setImagePreview("");
      // e.target.reset();

    } catch (error) {
      console.error("Error creating ticket:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground py-10 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Add New Ticket</h1>
          <p className="text-sm text-default-500 mt-1">Create a new listing for your transport service.</p>
        </div>

        {/* Hero UI Native Form Container */}
        <Form onSubmit={handleSubmit} validationBehavior="native" className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full items-start">
            
            {/* LEFT COLUMN */}
            <div className="col-span-1 lg:col-span-7 space-y-6">
              
              {/* VENDOR DETAILS */}
              <Card className="p-6 border border-divider">
                <Card.Content className="space-y-4">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-default-500 mb-2">Vendor Details</h2>
                  {/* vendor name field */}
                  <TextField 
                    isReadOnly 
                    name="vendorName" 
                    value={isPending ? "Vendor Name" : (vendorInfo.name || "Vendor Name")} 
                    className="w-full"
                  >
                    <Label className="text-sm font-medium block mb-1.5 text-default-700">Vendor Name</Label>
                    <div className="relative flex items-center">
                      <User className="absolute left-3 text-default-400 w-4 h-4" />
                      <Input className="w-full pl-9 pr-3 py-2 bg-default-100 rounded-lg border-none focus:outline-none cursor-not-allowed opacity-80" />
                    </div>
                  </TextField>

                  {/* Vendor Email Field */}
                  <TextField 
                    isReadOnly 
                    name="vendorEmail" 
                    value={isPending ? "vendor@example.com" : (vendorInfo.email || "vendor@example.com")} 
                    className="w-full"
                  >
                    <Label className="text-sm font-medium block mb-1.5 text-default-700">Contact Email</Label>
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
                  <h2 className="text-xs font-bold uppercase tracking-wider text-default-500 mb-1">Journey Details</h2>

                  {/* Ticket Title */}
                  <TextField isRequired name="ticketTitle" className="w-full">
                    <div className="relative flex items-center">
                      <Heading className="absolute left-3 text-default-400 w-4 h-4" />
                      <Input placeholder="e.g., Express Bus to City Center" className="w-full pl-9 pr-3 py-2 rounded-lg border border-default-300 dark:border-default-600 bg-transparent" />
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
                        <ListBox.Item id="Bus" textValue="Bus" className="px-3 py-2 hover:bg-default-100 dark:hover:bg-default-800 rounded-md cursor-pointer text-sm">Bus</ListBox.Item>
                        <ListBox.Item id="Train" textValue="Train" className="px-3 py-2 hover:bg-default-100 dark:hover:bg-default-800 rounded-md cursor-pointer text-sm">Train</ListBox.Item>
                        <ListBox.Item id="Launch&Ship" textValue="Launch / Ship" className="px-3 py-2 hover:bg-default-100 dark:hover:bg-default-800 rounded-md cursor-pointer text-sm">Launch / Ship</ListBox.Item>
                        <ListBox.Item id="Air" textValue="Air" className="px-3 py-2 hover:bg-default-100 dark:hover:bg-default-800 rounded-md cursor-pointer text-sm">Air</ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>

                  {/* Route Timeline Maps */}
                  <div className="relative space-y-5">
                    <div className="absolute left-4.5 top-5 bottom-5 w-[1.5px] border-l-2 border-dashed border-divider z-0"></div>
                    
                    <TextField isRequired name="fromLocation" className="w-full z-10">
                      <div className="relative flex items-center">
                        <MapPin className="absolute left-3 text-default-400 w-4 h-4" />
                        <Input placeholder="Departure Location" className="w-full pl-9 pr-3 py-2 rounded-lg border border-default-300 dark:border-default-600 bg-background" />
                      </div>
                      <FieldError className="text-xs text-danger mt-1" />
                    </TextField>

                    <TextField isRequired name="arrivalDestination" className="w-full z-10">
                      <div className="relative flex items-center">
                        <MapPin className="absolute left-3 text-success w-4 h-4" />
                        <Input placeholder="Arrival Destination" className="w-full pl-9 pr-3 py-2 rounded-lg border border-default-300 dark:border-default-600 bg-background" />
                      </div>
                      <FieldError className="text-xs text-danger mt-1" />
                    </TextField>
                  </div>

                  {/* Date Time */}
                  <TextField isRequired name="departureDateTime" className="w-full">
                    <div className="relative flex items-center">
                      <Calendar className="absolute left-3 text-default-400 w-4 h-4" />
                      <Input type="datetime-local" className="w-full pl-9 pr-3 py-2 rounded-lg border border-default-300 dark:border-default-600 bg-transparent" />
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
                  <TextField isRequired name="price">
                    <Label className="text-xs font-medium block mb-1 text-default-600">Price per Unit ($)</Label>
                    <div className="relative flex items-center">
                      <DollarSign className="absolute left-3 text-default-400 w-4 h-4" />
                      <Input type="number" step="0.01" placeholder="0.00" className="w-full pl-9 pr-3 py-2 rounded-lg border border-default-300 dark:border-default-600 bg-transparent" />
                    </div>
                    <FieldError className="text-xs text-danger mt-1" />
                  </TextField>

                  <TextField isRequired name="quantity">
                    <Label className="text-xs font-medium block mb-1 text-default-600">Quantity</Label>
                    <div className="relative flex items-center">
                      <Layers className="absolute left-3 text-default-400 w-4 h-4" />
                      <Input type="number" placeholder="Qty" className="w-full pl-9 pr-3 py-2 rounded-lg border border-default-300 dark:border-default-600 bg-transparent" />
                    </div>
                    <FieldError className="text-xs text-danger mt-1" />
                  </TextField>
                </Card.Content>
              </Card>

              {/* INCLUDED PERKS - Hero UI v3 Atomic Format */}
              <Card className="p-6 border border-divider">
                <Card.Content>
                  <CheckboxGroup
                    name="perks"
                    value={perks}
                    onChange={(values) => setPerks(values)}
                    className="gap-2"
                  >
                    <Label className="text-xs font-bold uppercase tracking-wider text-default-500 mb-2 block">Included Perks</Label>
                    
                    <div className="grid grid-cols-2 gap-x-6 gap-y-4 w-full">
                      
                      {/* AC Perk */}
                      <Checkbox value="AC">
                        <Checkbox.Content className="flex items-center gap-2 text-sm text-default-700 dark:text-default-300">
                          <Checkbox.Control />
                          <Wind className="w-4 h-4 text-default-400" />
                          <span>AC</span>
                        </Checkbox.Content>
                      </Checkbox>

                      {/* WiFi Perk */}
                      <Checkbox value="WiFi">
                        <Checkbox.Content className="flex items-center gap-2 text-sm text-default-700 dark:text-default-300">
                          <Checkbox.Control />
                          <Wifi className="w-4 h-4 text-default-400" />
                          <span>WiFi</span>
                        </Checkbox.Content>
                      </Checkbox>

                      {/* Meals Perk */}
                      <Checkbox value="Meals">
                        <Checkbox.Content className="flex items-center gap-2 text-sm text-default-700 dark:text-default-300">
                          <Checkbox.Control />
                          <Utensils className="w-4 h-4 text-default-400" />
                          <span>Meals</span>
                        </Checkbox.Content>
                      </Checkbox>

                      {/* Charging Perk */}
                      <Checkbox value="Charging">
                        <Checkbox.Content className="flex items-center gap-2 text-sm text-default-700 dark:text-default-300">
                          <Checkbox.Control />
                          <BatteryCharging className="w-4 h-4 text-default-400" />
                          <span>Charging</span>
                        </Checkbox.Content>
                      </Checkbox>

                    </div>
                  </CheckboxGroup>
                </Card.Content>
              </Card>

              {/* IMAGE SELECTION BLOCK */}
              <Card className="p-6 border border-divider">
                <Card.Content>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-default-500 mb-3">Display Image</h2>
                  
                  <label className="flex flex-col items-center justify-center w-full h-44 border-2 border-dashed border-default-300 dark:border-default-700 rounded-xl cursor-pointer hover:bg-default-50 dark:hover:bg-default-900 transition-all relative overflow-hidden group">
                    {imagePreview ? (
                      <div className="absolute inset-0 w-full h-full">
                        <Image 
                          src={imagePreview} 
                          alt="Preview" 
                          width={400}
                          height={400}
                          className="w-20 h-20 object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-medium">
                          Change Cover Image
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center px-4">
                        <UploadCloud className="w-8 h-8 text-default-400 mb-2" />
                        <p className="text-sm text-default-600 dark:text-default-300 font-medium">Upload a cover image for this ticket</p>
                        <p className="text-xs text-default-400 mt-1">Supports PNG, JPG or WEBP</p>
                      </div>
                    )}
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
                  className="bg-[#006B4A] text-white font-medium shadow-sm hover:bg-[#00543A] px-6 rounded-xl flex items-center gap-2"
                >
                  {!isSubmitting && <Plus className="w-5 h-5" />}
                  Create Ticket Listing
                </Button>
              </div>

            </div>

          </div>
        </Form>

      </div>
    </div>
  );
}