class Relative < ActiveRecord::Base
  has_ancestry

  before_save :update_slug, :update_path

  def update_slug
    self.slug = self.name.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')
  end

  def update_path
    self.full_path = get_ancestry_path + self.slug
  end

  def get_ancestry_path
    self.root? ? '' : collect_paths( self.ancestors ) + '/'
  end

  def collect_paths(ancestors)
    ancestors.collect do |ancestor|
      ancestor.slug
    end.join '/'
  end
end
