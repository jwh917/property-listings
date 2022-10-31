# delete before end of review

class Student

  # name age major

  @@all = []

  def initialize(name, age, major)
    @name = name
    @age = age
    @major = major
    @@all << self
  end
  

  def name
    @name
  end

  def name=(name)
    @name = name
  end

  def age
    @age
  end

  def age=(age)
    @age = age
  end
  
  def self.all
    @@all
  end

  def self.add_age
    sum = 0 
    self.all.each do |stu|
    # @@all.each do |stu|
      # puts stu.age
      puts stu.name.upcase
      sum += stu.age
    end
    puts sum

  end


end


max = Student.new("Max", 25, "art")
max.name = "MaxJr"
# puts max.name
jane = Student.new("Jane", 19, "bio")
# puts jane.name

Student.add_age





