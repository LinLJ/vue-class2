import { shallowMount } from "@vue/test-utils";
import OrderEasy from "@/components/3-OrderEasy.vue";

describe("OrderEasy.vue", () => {
  it("renders props.msg when passed", () => {
    const wrapper = shallowMount(OrderEasy);
    const button = wrapper.find(".changeTest");
    button.trigger("click");
    expect(wrapper.vm.flag2).toBe(false);
  });
});
