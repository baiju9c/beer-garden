import React from "react";
import { shallow } from "enzyme";
import { UserInfoHeader } from "../UserInfoHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AccountBox from "@material-ui/icons/AccountBox";

const setup = overrideProps => {
  const props = Object.assign(
    {
      classes: {},
      canEdit: true,
      canDelete: true,
      onEdit: jest.fn(),
      onDelete: jest.fn(),
    },
    overrideProps,
  );
  const header = shallow(<UserInfoHeader {...props} />);
  return {
    header,
    props,
  };
};

describe("<UserInfoHeader />", () => {
  describe("render", () => {
    it("should render the title", () => {
      const { header } = setup();
      expect(header.find(Typography)).toHaveLength(2);
      expect(header.find(AccountBox)).toHaveLength(1);
    });

    it("should render the buttons", () => {
      const { header } = setup();
      expect(header.find(Button)).toHaveLength(2);
    });

    it("should not render if the user cant see them", () => {
      const { header } = setup({ canEdit: false, canDelete: false });
      expect(header.find(Button)).toHaveLength(0);
    });
  });
});