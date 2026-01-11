"use client";

import SecteurTemplate from '@/components/secteurs/SecteurTemplate';
import { artisanData } from './data';

export default function ArtisanClient() {
  return <SecteurTemplate data={artisanData} formType="site-artisan" />;
}
