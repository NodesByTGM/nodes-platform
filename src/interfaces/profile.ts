/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IProfileContext {
  profileType: string;
  setProfileType: (e) => void;
  hasProject: boolean,
  setHasProject: (e) => void;
  projectDetailsModal: boolean,
  setProjectDetailsModal: (e) => void,
  projectDetails: any,
  setProjectDetails: (e) => void,
  editProjectmodal: any,
  setEditProjectModal: (e) => void,
}
