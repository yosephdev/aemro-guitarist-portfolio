export interface VideoItem {
  id: string;
  youtubeId: string;
  title: string;
  category: 'Acoustic Solo' | 'Ethio-Jazz' | 'Live Performance' | 'Improvisation';
  description: string;
  duration: string;
  featured?: boolean;
  publishedYear: string;
  tuning?: string;
  keySignature?: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface GearItem {
  id: string;
  name: string;
  brand: string;
  category: 'Guitar' | 'Amplifier' | 'Pedalboard' | 'Accessory';
  description: string;
  yearsInUse: number;
  imageSeed: string;
}

export interface ScaleGuide {
  id: string;
  name: string;
  region: string;
  notes: string[];
  description: string;
  frequencies: number[];
}

export interface BookingRequest {
  name: string;
  email: string;
  eventType: 'Live Performance' | 'Private Event' | 'Masterclass / Lesson' | 'Studio Session' | 'Collaboration';
  eventDate: string;
  location: string;
  budgetRange: string;
  message: string;
}
