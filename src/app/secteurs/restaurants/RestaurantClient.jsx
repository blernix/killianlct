"use client";

import SecteurTemplate from '@/components/secteurs/SecteurTemplate';
import { restaurantData } from './data';

export default function RestaurantClient() {
  return <SecteurTemplate data={restaurantData} formType="site-restaurant" />;
}
