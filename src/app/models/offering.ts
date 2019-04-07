import {Location} from './location';

export interface Offering {
  id: string;
  name: string;
  slug: string;
  status: string;
  location: Location;
  type: string;
  purchase_price: number;
  loan_to_value: number;
  categories: any[];
  expected_roi: number;
  minimum_investment: number;
  holding_period: string;
  map: string;
  description: string;
  is_coming_soon: number;
  is_waiting_list: number;
  interested_investors: number;
  available_to_invest: number;
  investment_goal: number;
  images: any[];
  videos: any[];
}
