import { Profile } from "../../_applications/models/profile";
import { ProfileDTO } from "../dto/profile.dto";

export const ProfileMapper = {
  toDomain: (dto: ProfileDTO): Profile => ({
    firstName: dto?.first_name,
    lastName: dto?.last_name,
  }),
  toDTO: (profile: Profile): ProfileDTO => ({
    first_name: profile.firstName,
    last_name: profile.lastName,
  }),
};
