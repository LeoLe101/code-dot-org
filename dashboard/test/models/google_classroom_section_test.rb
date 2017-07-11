require 'test_helper'

class GoogleClassroomSectionTest < ActiveSupport::TestCase
  setup_all do
    @student = create :student
    @teacher = create :teacher
    @section = create :section, teacher: @teacher

    @default_attrs = {user: @teacher, name: 'test-section'}
  end

  test 'sample test' do
    assert true
  end
end
