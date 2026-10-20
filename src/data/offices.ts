export interface OfficeLocation {
  id: string;
  city: "Lagos" | "Abuja" | "Port Harcourt";
  area: string;
  address: string;
  postalCode: string;
  phone: string;
  email: string;
  workingHours: string;
  isHeadquarters: boolean;
}

export const OFFICES: OfficeLocation[] = [
  {
    id: "lagos",
    city: "Lagos",
    area: "Ikoyi",
    address: "Plot 14B, Alexander Road, Ikoyi",
    postalCode: "101233, Lagos State",
    phone: "+234 (1) 295 4400",
    email: "lagos@xyzlawfirm-demo.ng",
    workingHours: "Mon - Fri: 8:00 AM - 6:00 PM WAT",
    isHeadquarters: true
  },
  {
    id: "abuja",
    city: "Abuja",
    area: "Maitama",
    address: "5th Floor, Sterling Heights, Aguiyi Ironsi Way, Maitama",
    postalCode: "900271, Federal Capital Territory",
    phone: "+234 (9) 461 3200",
    email: "abuja@xyzlawfirm-demo.ng",
    workingHours: "Mon - Fri: 8:30 AM - 5:30 PM WAT",
    isHeadquarters: false
  },
  {
    id: "port-harcourt",
    city: "Port Harcourt",
    area: "GRA Phase II",
    address: "22 Tombia Street, GRA Phase II",
    postalCode: "500272, Rivers State",
    phone: "+234 (84) 302 910",
    email: "ph@xyzlawfirm-demo.ng",
    workingHours: "Mon - Fri: 8:30 AM - 5:00 PM WAT",
    isHeadquarters: false
  }
];
