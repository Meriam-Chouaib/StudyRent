import { PATHS } from '../config/paths';

export const getPath = (
  backStudentsList: boolean | undefined,
  backOwnersList: boolean | undefined,
): string => {
  let path = `/${PATHS.DASHBOARD.ROOT}/${PATHS.DASHBOARD.ADMIN.ROOT}/`;
  if (backStudentsList) {
    path += `${PATHS.DASHBOARD.ADMIN.STUDENTS}`;
  }
  if (backOwnersList) {
    path += `${PATHS.DASHBOARD.ADMIN.OWNERS}`;
  }

  return path;
};
