"use client";

import SecteurTemplate from '@/components/secteurs/SecteurTemplate';
import { avocatData } from './data';

export default function AvocatClient() {
  return <SecteurTemplate data={avocatData} formType="site-avocat" />;
}
