/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IDashboardContext {
  pageName: string;
  accountType: string;
  setAccountType: (e) => void;
  user: any;
  currentPlan: string | null;
  setCurrentPlan: (e) => void;
  userIsBusiness: boolean;
  setUserIsBusiness: (e) => void;
  profileData?: any;
  profileIsSuccess?: boolean;
  profileLoading?: boolean;
  profileRefetch?: any;
  jobModal: boolean;
   setJobModal: (e) => void
 
}
