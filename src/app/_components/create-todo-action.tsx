import { Button } from "@/core/components/button";
import { Flex } from "@/core/components/flex";
import { SubmitButton } from "@/core/components/submit-button";

type Props = {
  onCancelClicked: () => void;
};

export function CreateTodoAction(props: Props) {
  return (
    <div className="w-full mt-4">
      <Flex justify="end">
        <Button
          onClick={props.onCancelClicked}
          type="button"
          intent="secondary"
          padding="sm"
          size="full"
        >
          cancel
        </Button>
        <SubmitButton size="full">submit</SubmitButton>
      </Flex>
    </div>
  );
}
