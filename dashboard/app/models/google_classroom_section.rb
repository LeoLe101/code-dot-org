# == Schema Information
#
# Table name: sections
#
#  id                :integer          not null, primary key
#  user_id           :integer          not null
#  name              :string(255)
#  created_at        :datetime
#  updated_at        :datetime
#  code              :string(255)
#  script_id         :integer
#  course_id         :integer
#  grade             :string(255)
#  login_type        :string(255)      default("email"), not null
#  deleted_at        :datetime
#  stage_extras      :boolean          default(FALSE), not null
#  section_type      :string(255)
#  first_activity_at :datetime
#  pairing_allowed   :boolean          default(TRUE), not null
#
# Indexes
#
#  fk_rails_20b1e5de46        (course_id)
#  index_sections_on_code     (code) UNIQUE
#  index_sections_on_user_id  (user_id)
#

class GoogleClassroomSection < Section
  def self.from_omniauth(course_id, owner_id, students)
    code = "G-#{course_id}"

    oauth_section = where(code: code).first_or_create do |section|
      section.login_type = Section::LOGIN_TYPE_GOOGLE_CLASSROOM
      section.name = 'New Section'
      section.user_id = owner_id
    end

    students.each do |student|
      oauth_section.add_student User.from_omniauth(student, {})
    end

    oauth_section
  end
end
