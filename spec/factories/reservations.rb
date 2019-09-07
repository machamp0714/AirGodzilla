FactoryBot.define do
  factory :reservation do
    start_time { "2019-09-07 11:59:31" }
    end_time { "2019-09-07 11:59:31" }
    price { 1 }
    total { 1 }
  end
end
