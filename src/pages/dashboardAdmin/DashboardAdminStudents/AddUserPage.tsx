import SignUpForm from '../../../features/auth/signUp/SignUpForm';

interface AddUserPageProps {
  backStudentList?: boolean;
  backOwnersList?: boolean;
}
export const AddUserPage = ({ backOwnersList, backStudentList }: AddUserPageProps) => {
  return (
    <>
      <SignUpForm
        isAdmin={true}
        backStudentList={backStudentList}
        backOwnersList={backOwnersList}
      />
    </>
  );
};
