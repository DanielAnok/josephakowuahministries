
export interface Sermon {
  id: string;
  title: string;
  date: string;
  duration: string;
  thumbnail: string;
  description: string;
}

export interface PrayerRequest {
  id: string;
  name: string;
  message: string;
  timestamp: Date;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
