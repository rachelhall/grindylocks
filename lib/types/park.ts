export interface IPark {
  id: number;
  name: string;
  street_number: number;
  street_name: string;
  city: string;
  state: string;
  postal_code: number;
  country: string;
  description: string;
  media: File[];
}
