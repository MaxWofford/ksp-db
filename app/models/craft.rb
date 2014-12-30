class Craft < ActiveRecord::Base
  acts_as_taggable # Alias for acts_as_taggable_on :tags
  acts_as_taggable_on :tags
  validates :name, presence: {message: 'Name cannot be blank, Craft not saved'}
  validates :craft_file, presence: {message: 'Craft file cannot be blank, Craft not saved'}
end
