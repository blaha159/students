import { mount } from "@vue/test-utils";
import PageTitle from "~/components/partials/PageTitle";

describe("PageTitle.spec.js", () => {
  let cmp;

  beforeEach(() => {
    cmp = mount(PageTitle, {
      // Be aware that props is overridden using `propsData`
      propsData: {
        heading: "Hello yo"
      }
    });
  });

  it('has received "Hello yo" as the title property', () => {
    expect(cmp.vm.heading).toEqual("Hello yo");

    expect(cmp.vm.$el.querySelector('.page-title-heading > div:not(.page-title-icon)').textContent.trim())
      .toBe(cmp.vm.heading)
  });
});
