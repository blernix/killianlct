"use client";

import SecteurTemplate from '@/components/secteurs/SecteurTemplate';
import { psychologueData } from './data';

export default function PsychologueClient() {
  return <SecteurTemplate data={psychologueData} formType="site-psychologue" />;
}
