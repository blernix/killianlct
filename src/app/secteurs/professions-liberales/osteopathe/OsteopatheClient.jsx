"use client";

import SecteurTemplate from '@/components/secteurs/SecteurTemplate';
import { osteopatheData } from './data';

export default function OsteopatheClient() {
  return <SecteurTemplate data={osteopatheData} formType="site-osteopathe" />;
}
