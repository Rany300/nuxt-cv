export type Profile = {
  name: string;
  job?: string;
  age: number;
  email: string;
  phone: string;
  avatars: string[];
  contactLine?: string;
};

export const Profile: Profile = {
  name: "Daniel REDING",
  job: "Fullstack Developer",
  age: 23,
  email: "daniel.reding1999@gmail.com",
  phone: "+352 691 437 180",
  avatars: [
    "http://localhost:3000/pictures/profile-pic1.jpeg",
    "http://localhost:3000/pictures/profile-pic2.jpeg",
  ],
  contactLine: "Are you looking for a developer ? Contact me !",
};
