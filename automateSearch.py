from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

# Initialize the WebDriver
driver = webdriver.Chrome()

try:
    # Open the search page
    driver.get("https://torontomu.primo.exlibrisgroup.com/discovery/search?vid=01OCUL_TMU:01OCUL_TMU&lang=en")

    # Perform a search
    search_box = driver.find_element(By.XPATH, '//*[@id="searchBar"]')
    search_box.send_keys("Meta Physics")
    search_box.send_keys(Keys.RETURN)

    # Wait for the search results to load
    WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.CLASS_NAME, "item-title"))
    )

    # Locate all h3 elements with the class "item-title"
    titles = driver.find_elements(By.XPATH, "//h3[contains(@class, 'item-title')]")

    # Check if any titles were found
    if not titles:
        print("No titles found. Check the XPath or wait for results to load.")
    else:
        print(f"Found {len(titles)} results.")

        # Loop through the titles and print their text
        for index, title_element in enumerate(titles, start=1):
            try:
                title = title_element.text
                print(f"Result {index}: {title}")
            except Exception as e:
                print(f"Error fetching title for result {index}: {e}")

    # Pause to inspect browser
    time.sleep(10)  # Keeps the browser open for 10 seconds

finally:
    # Optionally keep the browser open by commenting out this line
    driver.quit()